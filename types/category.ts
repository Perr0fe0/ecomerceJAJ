/* eslint-disable linebreak-style */
export type categoryType = {
    id: number,
    attributes: {
        categoryName: string,
        slug:string,
        mainImage: {
            data:{
                attributes:{
                    url:string
                }
            }
        }
    }
}