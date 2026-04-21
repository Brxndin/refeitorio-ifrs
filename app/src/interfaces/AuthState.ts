import { Usuario } from "./Usuario";

export interface AuthState {
    token: null | string,
    user: Usuario | null,
    auth: boolean | null
}
