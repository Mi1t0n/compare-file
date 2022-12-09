import {DiffEditor} from "@monaco-editor/react";
import {IFileEditor} from "./IFileEditor";

const FileEditor = ({original, modified}: IFileEditor) =>
    <DiffEditor width={1310} height={600}
                options={{
                    enableSplitViewResizing: false,
                    minimap                : {enabled: false},
                    renderOverviewRuler    : false,
                }}
                original={original} modified={modified}
    />

export default FileEditor;
