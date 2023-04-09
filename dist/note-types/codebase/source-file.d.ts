import { JSONEncodedString } from "../../http-form";
export interface SourceFileContributor {
    name: string;
    numberOfChanges: number;
    firstChangeTimestamp: number;
    lastChangeTimestamp: number;
}
export type SourceFileHandlerExtensionProperties = {
    numberOfLines: string;
    numberOfChanges: string;
    numberOfContributors: string;
    contributors?: SourceFileContributor[];
};
export interface SourceFileNoteCreateUpdateRequest {
    "number-of-lines": string;
    "number-of-changes": string;
    "number-of-contributors": string;
    contributors: JSONEncodedString;
}
