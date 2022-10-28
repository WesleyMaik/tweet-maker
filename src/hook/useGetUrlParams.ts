export const useGetUrlParams = (param:string | string[]) => {
    if(typeof param == 'string'){
        return (new URLSearchParams(document.location.search).get(param)) || '';
    }else if(typeof param == 'object'){
        return param.map((p) => {
            return (new URLSearchParams(document.location.search).get(p))!
        }) || []
    }else{
        return [];
    }
};