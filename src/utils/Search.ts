export interface ISearchFunction {
    (source: string, substring: string): boolean;
};

export const mySearchFunction: ISearchFunction = (source, substring) => {
    let result = source.search(substring);
    return result > -1;
}