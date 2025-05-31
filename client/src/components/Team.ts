// client/src/components/Team.ts

export class Team {
    id: number | undefined;
    name: string = '';
    points: number | undefined;
    logoUrl: string = '';


    constructor(initializer?: any) {
      if (!initializer) return;
      if (initializer.id) this.id = initializer.id;
      if (initializer.name) this.name = initializer.name;
      if (initializer.points) this.points = initializer.points;
      if (initializer.logoUrl) this.logoUrl = initializer.logoUrl;
    }
}