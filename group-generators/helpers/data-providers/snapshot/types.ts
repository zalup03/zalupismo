import { IGraphQLProvider } from "@group-generators/helpers/data-providers/graphql/types";
import { FetchedData } from "topics/group";

export type QueryVotersOutput = { votes: { voter: string; created: number }[] };

export type QuerySpaceVotersInput = {
  space: string;
  forcedValue?: number;
};

export type QueryProposalVotersInput = {
  proposal: string;
};

export type QueryAllVotersInput =
  | QuerySpaceVotersInput
  | QueryProposalVotersInput;

export type QueryProposalVotersCountOutput = { proposal: { votes: number } };

export type QuerySpaceVotersCountOutput = { space: { followersCount: number } };

export type QuerySpaceFollowersInput = {
  space: string;
  date?: string;
};

export type QuerySpaceFollowersOutput = {
  follows: [
    {
      follower: string;
      created: number;
    }
  ];
};

export type QuerySpaceAuthorsInput = {
  space: string;
  forcedValue?: number;
};

export type QuerySpaceAuthorsOutput = {
  proposals: [
    {
      author: string;
      created: number;
    }
  ];
};

export type QuerySpaceAdminsInput = {
  space: string;
};

export type QuerySpaceAdminsOutput = {
  spaces: [
    {
      admins: string[];
    }
  ];
};

export type QuerySpaceVotersAboveXInput = {
  space: string;
  abovex?: number;
  forcedValue?: number;
};

export type QueryProposalAuthorsAboveXInput = {
  space?: string;
  abovex?: number;
  state?: string;
  forcedValue?: number;
};

export interface ISnapshotProvider extends IGraphQLProvider {
  queryAllVoters(input: QueryAllVotersInput): Promise<FetchedData>;
  querySpaceFollowers({
    space,
    date,
  }: QuerySpaceFollowersInput): Promise<FetchedData>;
  querySpaceFollowersCount({
    space,
    date,
  }: QuerySpaceFollowersInput): Promise<number>;
  querySpaceAuthors({
    space,
    forcedValue,
  }: QuerySpaceAuthorsInput): Promise<FetchedData>;
  querySpaceAuthorsCount({ space }: QuerySpaceAuthorsInput): Promise<number>;
  querySpaceAdmins({ space }: QuerySpaceAdminsInput): Promise<FetchedData>;
  querySpaceAdminsCount({ space }: QuerySpaceAdminsInput): Promise<number>;
  querySpaceVotersAboveX({
    space,
    abovex,
    forcedValue,
  }: QuerySpaceVotersAboveXInput): Promise<FetchedData>;
  querySpaceVotersAboveXCount({
    space,
    abovex,
  }: QuerySpaceVotersAboveXInput): Promise<number>;
  queryProposalAuthorsAboveX({
    space,
    abovex,
    state,
    forcedValue,
  }: QueryProposalAuthorsAboveXInput): Promise<FetchedData>;
  queryProposalAuthorsAboveXCount({
    space,
    abovex,
    state,
  }: QueryProposalAuthorsAboveXInput): Promise<number>;
}
