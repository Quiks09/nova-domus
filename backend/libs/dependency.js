export class Dependency {
    static dependenciesList = {};

    static add(dependencyName, dependency){
    if(this.dependenciesList[dependencyName]){
        throw new Error(`Dependency ${dependencyName} already exists.`)
    }
    this.dependenciesList[dependencyName] = dependency;
}

    static get(name){
        if(!this.dependenciesList[dependencyName]){
            throw new Error(`Dependency ${dependencyName} does not exist.`)
        }

        return this.dependenciesList[dependencyName];
    }

}