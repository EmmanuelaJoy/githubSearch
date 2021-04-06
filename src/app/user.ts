export class User {
    constructor(public profileUrl: string, public name: string, public bio: string, public location: string, public public_repos: number, public public_gists: number, public followers: number, public following: number, public created_at: Date, public siteLink: string) { }
}
