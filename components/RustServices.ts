import { default as AsyncapiRustServer } from '../definitions/bundled/rust.asyncapi.json';
import { default as AsyncapiRustPublic } from '../definitions/bundled/rust_public.asyncapi.json';

export type Service = {
	document: any,
	name: string,
	description: string,
	path_to_service: string,
}
export const RustServices: {[key: string]: Service} = {
	server: {
		document: AsyncapiRustServer, 
		name: "Game server", 
		description: "The rust game server",
		path_to_service: "/platform/games/rust/server/flows"
	},
	public: {
		document: AsyncapiRustPublic, 
		name: "Rust public API", 
		description: "Interact with your gameserver.",
		path_to_service: "/platform/games/rust/public/flows"
	}
};