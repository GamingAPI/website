
import { default as AsyncapiRustServer } from '../definitions/documents/rust_server_bundle.asyncapi.json';
import { default as AsyncapiRustProcessor } from '../definitions/documents/rust_processor_bundle.asyncapi.json';

export const RustServices: any = {
	server: {document: AsyncapiRustServer, name: "Game server", description: "The rust game server"},
	processor: {document: AsyncapiRustProcessor, name: "Rust processor", description: "Processes in-game events to provide a REST API for historical data."}
};