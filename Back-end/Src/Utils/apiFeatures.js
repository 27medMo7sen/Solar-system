import { paginationFunciton } from "./pagination.js";
export class apiFeatures {
  constructor(mongooseQuery, queryData) {
    this.mongooseQuery = mongooseQuery;
    this.queryData = queryData;
  }
  sort() {
    if (this.queryData.sort) {
      this.mongooseQuery = this.mongooseQuery.sort(
        this.queryData.sort.replaceAll(",", " ")
      );
    }
    return this;
  }
  select() {
    if (this.queryData.select) {
      this.mongooseQuery = this.mongooseQuery.select(
        this.queryData.select.replaceAll(",", " ")
      );
    }
    return this;
  }
  search() {
    if (this.queryData.search && this.queryData.fields) {
      const searchFields = this.queryData.fields
        .split(",")
        .map((field) => field.trim());
      if (searchFields.length > 0) {
        const searchConditions = searchFields.map((field) => ({
          [field]: { $regex: this.queryData.search, $options: "i" },
        }));
        this.mongooseQuery = this.mongooseQuery.find({ $or: searchConditions });
      }
    }
    return this;
  }
  pagination() {
    const { limit, skip } = paginationFunciton(
      this.queryData.page,
      this.queryData.size
    );
    this.mongooseQuery = this.mongooseQuery.limit(limit).skip(skip);
    return this;
  }
  filter() {
    const excludeFields = [
      "page",
      "sort",
      "size",
      "select",
      "search",
      "fields",
    ];
    const queryInstance = { ...this.queryData };
    console.log(queryInstance);

    excludeFields.forEach((key) => delete queryInstance[key]);
    // console.log(queryInstance);
    const queryString = JSON.parse(
      JSON.stringify(queryInstance).replace(
        /lte|gte|gt|lt|regex|in|nin|eq|neq/g,
        (match) => `$${match}`
      )
    );
    // console.log(queryString);
    this.mongooseQuery = this.mongooseQuery.find(queryString);
    return this;
  }
}
