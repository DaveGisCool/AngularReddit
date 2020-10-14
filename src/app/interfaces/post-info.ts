export interface PostInfo {
    kind:string;
    data:Children;
}

export interface Children {
    modhas:string;
    dist:number;
    children:Child[];
}

export interface Child {
    kind:string;
    data:PostData;
}

export interface PostData {
    title:string;
    thumbnail:string;
    permalink:string;
}

//PostInfo.data.children