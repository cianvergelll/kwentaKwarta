import LeftPanel from "@/components/left-panel";

export default function Payments() {
  return (
    <div className="flex">
      <LeftPanel />
      
      <div className="main-content">
        <h1>Welcome to Kwenta</h1>
        <p>Your intro text goes here.</p>
        <button className="btn">Get Started Now</button>
      </div>
    </div>
  );
}
