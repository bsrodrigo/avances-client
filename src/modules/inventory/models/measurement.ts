export class Measurement {
  public readonly id?: string;
  public readonly acronym?: string;
  public readonly description?: string;

  constructor(data: Measurement.Data) {
    this.id = data.id;
    this.acronym = data.acronym;
    this.description = data.description;
  }
}

export namespace Measurement {
  export type Data = {
    id?: string;
    acronym?: string;
    description?: string;
  };
}
