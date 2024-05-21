export class Dependency {
    static dependenciesList = {};

    static add(name, dependency){
    if(this.dependenciesList[name]){
        throw new Error('Dependency already exists.')
    }
    this.dependenciesList[name] = dependency;
}

    static get(name){
        if(!this.dependenciesList[name]){
            throw new Error('Dependency does not exist.')
        }

        return this.dependenciesList[name];
    }

}