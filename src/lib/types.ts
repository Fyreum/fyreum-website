export type Blog = {
    id: string;
    title: string;
    author: string;
    previewImage: string;
    description: string;
    date: Date;
    tags?: BlogTag[];
}

export type BlogTag = {
    id: string;
    name: string;
    color: string;
}