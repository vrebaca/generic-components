export interface IStep{
    Title: string;
    CurrentUrl?: string;
    NextPageUrl: string;
}

export interface IStepTracker{
    CurrentStep: number;
    IsTextReduced: boolean;
    MarginTop?: string;
    MarginBottom?: string;
    PaddingRight?: string;
    Steps: IStep[];
}