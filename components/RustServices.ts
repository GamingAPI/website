
import { default as AsyncapiRustServer } from '../definitions/bundled/rust.asyncapi.json';
import { default as AsyncapiRustPublic } from '../definitions/bundled/rust_public.asyncapi.json';

export const RustServices: any = {
	server: {document: AsyncapiRustServer, name: "Game server", description: "The rust game server"},
	public: {document: AsyncapiRustPublic, name: "Rust public API", description: "Interact with your gameserver."}
};