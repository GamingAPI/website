import { AsyncAPIDocument } from "@asyncapi/parser";

export function getRelations(asyncApiDocs: AsyncAPIDocument[]) {
  const metrics = new Map();

  asyncApiDocs.forEach((doc: AsyncAPIDocument) => {
    if (doc.hasServers()) {
      const servers = doc.servers();

      for (const credentials of Object.values(servers)) {
        const slug = `${credentials.url()},${credentials.protocol()}`;
        let relation: any;
        if (metrics.has(slug)) {
          relation = metrics.get(slug);
        } else {
          relation = new Map();
          metrics.set(slug, relation);
        }

        if (doc.hasChannels()) {
          doc.channelNames().forEach((channelName) => {
            let application;
            if (relation.has(channelName)) {
              application = relation.get(channelName);
            } else {
              application = {
                sub: new Map(),
                pub: new Map(),
              };
              relation.set(channelName, application);
            }

            const channel = doc.channel(channelName);
            const title = doc.info().title();

            if (channel.hasPublish()) {
              if (application.pub.has(title)) {
                throw new Error(`${title} is already publishing to ${channel}`);
              }
              application.pub.set(title, channel.json());
            }
            if (channel.hasSubscribe()) {
              if (application.sub.has(title)) {
                throw new Error(`${title} is already subscribed to ${channel}`);
              }
              application.sub.set(title, channel.json());
            }
          });
        }
      }
    }
  });
  return metrics;
}