import { SourceFileHandlerExtensionProperties } from "./note-types/codebase/source-file";
import { PersonalDateRangeExtensionProperties } from "./note-types/date-range/personal-date-range";
import { NoteInSectionExtensionProperties } from "./note-types/plaintext-note";
import { YoutubeVideoExtensionProperties } from "./note-types/youtube-video";
import { NotebookColumnValueType } from "./notebook-model";
export interface NoteType {
    type: string;
}
export interface NoteAttachment {
    id: string;
    noteID: string;
    name: string;
    fileExtension: string;
    objectKey: string;
    createdAt: string;
    owner: string;
}
export type NoteExtensionProperties = Partial<SourceFileHandlerExtensionProperties> & Partial<YoutubeVideoExtensionProperties> & Partial<NoteInSectionExtensionProperties> & Partial<PersonalDateRangeExtensionProperties>;
export interface Note {
    id: string;
    notebookID: string;
    owner: string;
    type: NoteType;
    content: string;
    extensionProperties?: NoteExtensionProperties;
    columnValues?: {
        [key: string]: NotebookColumnValueType;
    };
}
export interface RenderedNote extends Note {
    renderedContent: string;
}
