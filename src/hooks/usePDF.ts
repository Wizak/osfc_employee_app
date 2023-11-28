import * as React from "react";
import * as pdfjsLib from "pdfjs-dist";

import { TypedArray, DocumentInitParameters } from "pdfjs-dist/types/src/display/api";


pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;


export type State = 'loading' | 'success';

export type CanvasProps = {
    page: Promise<pdfjsLib.PDFPageProxy>,
    style?: React.CSSProperties,
}

export type PDF = {
    canvas(props: CanvasProps): React.ReactElement,
    props: CanvasProps,
}[];



export const usePDF = (src: string | URL | TypedArray | ArrayBuffer | DocumentInitParameters, Canvas) => {
    console.log("src", src);
    console.log("Canvas", Canvas);
    const loadingTask = pdfjsLib.getDocument({ url: src });
    const [pdf, setPdf] = React.useState<PDF>();
    const [state, setState] = React.useState<State>('loading');

    React.useEffect(() => {
        if (state === 'loading') {
            loadingTask.promise.then((document) => {
                const pageNumbers = Array.from(Array(document.numPages), (e, i) => i + 1);
                const pdf = pageNumbers.map((pageNumber) => {
                    return {
                        canvas: Canvas,
                        props: {page: document.getPage(pageNumber)},
                    }
                })
                setPdf(pdf);
                setState('success');
            });
        };
    });

    return pdf;
};
