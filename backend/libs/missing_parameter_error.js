export class MissingParameterError extends Error{
    constructor(paramName){
        super();

        this.paramName = paramName;
    }
}