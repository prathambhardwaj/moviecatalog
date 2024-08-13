import { Divider, Flex } from "antd";
import MovieCard from "./MovieCard";

export default function Home() {
  return (
    <Flex vertical>
      <Divider orientation="left">Top Rated Movies</Divider>
      <Flex gap={8}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </Flex>
      <Divider orientation="left">Action Movies</Divider>
      <Divider orientation="left">Comedy Movies</Divider>
      <Divider orientation="left">All Movies</Divider>
    </Flex>
  );
}
