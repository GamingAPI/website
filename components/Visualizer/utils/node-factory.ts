import { Elements } from 'react-flow-renderer';
import { AsyncAPIDocument, Operation, Channel, Message } from '@asyncapi/parser';
interface FileredChannel {
  channel: string;
  channelModel: Channel;
  operationModel: Operation;
  messagesModel: Message[];
}

const getChannelsByOperation = (operation: string, spec: AsyncAPIDocument) => {
  const channels = spec.channels();

  return Object.keys(channels).reduce((filteredChannels: FileredChannel[], channel) => {
    const operationFn = operation === 'publish' ? 'hasPublish' : 'hasSubscribe';
    // eslint-disable-next-line
    if (channels[String(channel)][operationFn]()) {
      const operationModel = (channels as any)[String(channel)][String(operation)]() as Operation;
      filteredChannels.push({
        channel,
        channelModel: channels[String(channel)],
        operationModel,
        messagesModel: operationModel.messages(),
      });
    }
    return filteredChannels;
  }, []);
};

const buildFlowElementsForOperation = ({ operation, spec, applicationLinkType, data }: { operation: 'publish' | 'subscribe'; spec: AsyncAPIDocument; applicationLinkType: string, data: any }) => {
  const filteredChannels = getChannelsByOperation(operation, spec);
  
  return filteredChannels.reduce((nodes: any, channel) => {

    const { channelModel, operationModel, messagesModel } = channel;
    const node = {
      id: `${operation}-${channel.channel}`,
      type: `channelNode`,
      data: {
        title: operationModel.id(),
        channel: channel.channel,
        tags: operationModel.tags(),
        messages: messagesModel.map((message) => ({
          title: message.uid(),
          description: message.description(),
        })),
        spec,
        description: channelModel.description(),
        operationId: operationModel.id(),
        elementType: operation,
        theme: operation === 'subscribe' ? 'yellow' : 'green',
        ...data
      },
      position: { x: 0, y: 0 },
    };

    const connectorNode = {
      id: `${operation}-${channel.channel}-to-application`,
      // type: 'smoothstep',
      // animated: true,
      // label: messagesModel.map(message => message.uid()).join(','),
      style: { stroke: applicationLinkType === 'target' ? '#7ee3be' : 'orange', strokeWidth: 4 },
      source: applicationLinkType === 'target' ? `${operation}-${channel.channel}` : 'application',
      target: applicationLinkType === 'target' ? 'application' : `${operation}-${channel.channel}`,
    };
    return [...nodes, node, connectorNode];
  }, []);
};
const buildFlowElementsForExternal = ({ operation, externalApplications, applicationLinkType, data }: { operation: 'publish' | 'subscribe'; externalApplications: any[]; applicationLinkType: string, data: any }) => {
  return Object.entries(externalApplications).reduce((nodes: any, [app, externalApplication]) => {
    if(operation === externalApplication.operation){
      return [];
    }
    const appId = `external-${app}-${operation}`;
    const externalApplicationNode = {
      id: appId,
      type: `externalApplicationNode`,
      data: {
        title: externalApplication.title,
        path: externalApplication.path,
        elementType: operation,
        theme: 'grey',
        ...data
      },
      position: { x: 0, y: 0 },
    };
    const channelConnectorNodes = externalApplication.channels.reduce((preNodes: any, channel: string) => {
      const connectorNode = {
        id: `${appId}-${channel}-to-channel`,
        // type: 'smoothstep',
        // animated: true,
        // label: messagesModel.map(message => message.uid()).join(','),
        style: { stroke: 'gray', strokeWidth: 4 },
        source: applicationLinkType === 'target' ? `${operation}-${channel}` : appId,
        target: applicationLinkType === 'target' ? appId : `${operation}-${channel}`,
      };
      return [...preNodes, connectorNode];
    }, []);
    return [...nodes, ...channelConnectorNodes, externalApplicationNode];
  }, []);
};

export const getElementsFromAsyncAPISpec = (spec: AsyncAPIDocument, externalApplications: any[]): Elements => {
  const externalPublishApplication = buildFlowElementsForExternal({
    operation: 'publish',
    externalApplications,
    applicationLinkType: 'target',
    data: { columnToRenderIn: 'col-1' },
  });

  const publishNodes = buildFlowElementsForOperation({
    operation: 'publish',
    spec,
    applicationLinkType: 'target',
    data: { columnToRenderIn: 'col-2' },
  });

  const applicationNode = {
    id: 'application',
    type: 'applicationNode',
    data: { spec, elementType: 'application', theme: 'indigo', columnToRenderIn: 'col-3' },
    position: { x: 0, y: 0 }
  };

  const subscribeNodes = buildFlowElementsForOperation({
    operation: 'subscribe',
    spec,
    applicationLinkType: 'source',
    data: { columnToRenderIn: 'col-4' },
  });
  const externalSubscribeApplication = buildFlowElementsForExternal({
    operation: 'subscribe',
    externalApplications,
    applicationLinkType: 'target',
    data: { columnToRenderIn: 'col-5' },
  });

  return [...externalPublishApplication, ...publishNodes, applicationNode, ...subscribeNodes, ...externalSubscribeApplication];
};
