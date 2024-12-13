import { useEffect } from "react";
import type {
  ActionFunction,
  ActionFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import { Form, useFetcher, useLoaderData } from "@remix-run/react";

import { API } from "~/api/endpoints";
import ImagesList from "~/components/ImagesList";
import { loader } from "./api.jobs";

export const meta: MetaFunction = () => {
  return [
    { title: "Calo front end" },
    { name: "description", content: "Front end part of the challenge" },
  ];
};

export const action = async ({ request: { method } }: ActionFunctionArgs) => {
  if (method !== "POST") return;

  try {
    return await API.create();
  } catch (error) {
    return { error: "Failed to create job" };
  }
};

export default function Index() {
  const initialJobs = useLoaderData<typeof loader>();
  const { load, state, data } = useFetcher<typeof loader>();

  useEffect(() => {
    load("/api/jobs");

    const interval = setInterval(() => {
      load("/api/jobs");
    }, 5000);

    return () => clearInterval(interval);
  }, [load]);

  const jobs = data ?? initialJobs;

  return (
    <div className="container mx-auto p-4  w-96">
      <h1 className="text-2xl font-bold mb-4">Job Management</h1>

      <Form method="post" className="mb-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create new job
        </button>
      </Form>

      <p>Loading jobs each 5s ...</p>
      <ImagesList jobs={jobs} />
    </div>
  );
}
