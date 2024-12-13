import { Job, JobStatus } from "types";

interface Props {
  jobs: Job[] | undefined;
}

const statusColors = {
  [JobStatus.RESOLVED]: "bg-green-300",
  [JobStatus.PENDING]: "bg-yellow-300",
  [JobStatus.FAILED]: "bg-red-300",
};

export default function ImagesList({ jobs }: Props) {
  return (
    <div className="grid gap-4">
      {jobs?.map(({ id, status, imageUrl }) => (
        <div
          key={id}
          className={`p-3 flex flex-col gap-2 rounded shadow ${statusColors[status]}`}
        >
          <div className="flex justify-between text-black font-bold gap-4">
            <span>Job ID: {id}</span>
            <span>Status: {status}</span>
          </div>

          {status === JobStatus.RESOLVED && (
            <img
              src={imageUrl}
              alt="Fetched Food"
              className="rounded object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
}
