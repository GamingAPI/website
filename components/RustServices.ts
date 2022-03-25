
import { default as AsyncapiRustServer } from '../definitions/documents/rust_server_bundle.asyncapi.json';
import { default as AsyncapiRustProcessor } from '../definitions/documents/rust_processor_bundle.asyncapi.json';

export const RustServices: any = {
	server: AsyncapiRustServer,
	processor: AsyncapiRustProcessor
};