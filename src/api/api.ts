import require from "@/utils/require";

export const postAtion = (url: string, params: object) => {
  return require({
    url: url,
    method: 'POST',
    params: params,
  })
}


export const getAtion = (url: string, params: object) => {
  return require({
    url: url,
    method: 'GET',
    data: params,
  })
}