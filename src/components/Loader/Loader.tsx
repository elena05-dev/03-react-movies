import { BeatLoader } from "react-spinners";

export default function Loader() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
    >
      <BeatLoader size={60} color="#36d7b7" />
    </div>
  );
}
