import * as React from "react";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;


export type State = 'init' | 'success' | 'error';

export type CanvasProps = {
    page: Promise<pdfjsLib.PDFPageProxy>,
    style?: React.CSSProperties,
}

export type PDF = {
    canvas(props: CanvasProps): React.ReactElement,
    props: CanvasProps,
}[];



export const usePDF = (src: string | URL, Canvas) => {
    const [pdf, setPdf] = React.useState<PDF>();
    const [state, setState] = React.useState<State>('init');

    React.useEffect(() => {
        const loadPdf = async () => {
            try {
                const response = await fetch(src);
                const data = await response.arrayBuffer();
                const loadingTask = pdfjsLib.getDocument({ data });
                loadingTask.promise.then(
                    (document) => {
                        const pageNumbers = Array.from(Array(document.numPages), (e, i) => i + 1);
                        const pages = pageNumbers.map((pageNumber) => ({
                            canvas: Canvas,
                            props: { page: document.getPage(pageNumber) },
                        }));
                        setPdf(pages);
                        setState('success');
                    },
                    (error) => {
                        console.error('Error loading PDF:', error);
                        setState('error');
                    }
                );
            } catch (error) {
                console.error('Error fetching PDF:', error);
                setState('error');
            }
        };

        if (state === 'init') {
            loadPdf();
        }
    }, [src, Canvas, state]);

    return pdf;
};
