export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Board = {
  __typename?: 'Board';
  Columns?: Maybe<Array<Maybe<Column>>>;
  Tasks?: Maybe<Array<Maybe<Task>>>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type BoardFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  q?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_neq?: InputMaybe<Scalars['String']['input']>;
};

export type BoardInput = {
  title: Scalars['String']['input'];
};

export type Column = {
  __typename?: 'Column';
  Board?: Maybe<Board>;
  Tasks?: Maybe<Array<Maybe<Task>>>;
  board_id: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type ColumnFilter = {
  board_id?: InputMaybe<Scalars['ID']['input']>;
  board_id_neq?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  q?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_neq?: InputMaybe<Scalars['String']['input']>;
};

export type ColumnInput = {
  board_id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBoard?: Maybe<Board>;
  createColumn?: Maybe<Column>;
  createManyBoard?: Maybe<Array<Maybe<Board>>>;
  createManyColumn?: Maybe<Array<Maybe<Column>>>;
  createManyTask?: Maybe<Array<Maybe<Task>>>;
  createTask?: Maybe<Task>;
  removeBoard?: Maybe<Board>;
  removeColumn?: Maybe<Column>;
  removeTask?: Maybe<Task>;
  updateBoard?: Maybe<Board>;
  updateColumn?: Maybe<Column>;
  updateTask?: Maybe<Task>;
};


export type MutationCreateBoardArgs = {
  title: Scalars['String']['input'];
};


export type MutationCreateColumnArgs = {
  board_id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateManyBoardArgs = {
  data?: InputMaybe<Array<InputMaybe<BoardInput>>>;
};


export type MutationCreateManyColumnArgs = {
  data?: InputMaybe<Array<InputMaybe<ColumnInput>>>;
};


export type MutationCreateManyTaskArgs = {
  data?: InputMaybe<Array<InputMaybe<TaskInput>>>;
};


export type MutationCreateTaskArgs = {
  board_id: Scalars['ID']['input'];
  column_id: Scalars['ID']['input'];
  description: Scalars['String']['input'];
  status: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationRemoveBoardArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveColumnArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveTaskArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateBoardArgs = {
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateColumnArgs = {
  board_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateTaskArgs = {
  board_id?: InputMaybe<Scalars['ID']['input']>;
  column_id?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  Board?: Maybe<Board>;
  Column?: Maybe<Column>;
  Task?: Maybe<Task>;
  _allBoardsMeta?: Maybe<ListMetadata>;
  _allColumnsMeta?: Maybe<ListMetadata>;
  _allTasksMeta?: Maybe<ListMetadata>;
  allBoards?: Maybe<Array<Maybe<Board>>>;
  allColumns?: Maybe<Array<Maybe<Column>>>;
  allTasks?: Maybe<Array<Maybe<Task>>>;
};


export type QueryBoardArgs = {
  id: Scalars['ID']['input'];
};


export type QueryColumnArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaskArgs = {
  id: Scalars['ID']['input'];
};


export type Query_AllBoardsMetaArgs = {
  filter?: InputMaybe<BoardFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllColumnsMetaArgs = {
  filter?: InputMaybe<ColumnFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllTasksMetaArgs = {
  filter?: InputMaybe<TaskFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllBoardsArgs = {
  filter?: InputMaybe<BoardFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllColumnsArgs = {
  filter?: InputMaybe<ColumnFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllTasksArgs = {
  filter?: InputMaybe<TaskFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};

export type Task = {
  __typename?: 'Task';
  Board?: Maybe<Board>;
  Column?: Maybe<Column>;
  board_id: Scalars['ID']['output'];
  column_id: Scalars['ID']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type TaskFilter = {
  board_id?: InputMaybe<Scalars['ID']['input']>;
  board_id_neq?: InputMaybe<Scalars['ID']['input']>;
  column_id?: InputMaybe<Scalars['ID']['input']>;
  column_id_neq?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_neq?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  q?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  status_neq?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_neq?: InputMaybe<Scalars['String']['input']>;
};

export type TaskInput = {
  board_id: Scalars['ID']['input'];
  column_id: Scalars['ID']['input'];
  description: Scalars['String']['input'];
  status: Scalars['String']['input'];
  title: Scalars['String']['input'];
};
