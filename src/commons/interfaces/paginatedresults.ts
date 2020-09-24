interface PaginatedResponse<T> {
  info: {
    count: string;
    pages: string;
    next: string | null;
    prev: null;
  };

  results: T[];
}
export default PaginatedResponse;
