import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
import { useState } from "react";

// import App from "./App";
function Challange() {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #ffdde1, #ee9ca7, #c1c8e4)",
      }}
    >
      <Textexpender
        buttoncolor="gold"
        expanderbutton="show less"
        collapsebutton="show more"
        collapsnumword={15}
      >
        Technology has become an essential part of our everyday lives. From
        smartphones and laptops to smart home devices, we rely on technology to
        communicate, work, and stay informed. It has made tasks easier, faster,
        and often more enjoyable, but it also challenges us to find balance and
        manage screen time wisely....
      </Textexpender>
      <Textexpender
        buttoncolor="gold"
        expanderbutton="show text"
        collapsebutton="collapse text"
        collapsnumword={20}
      >
        Spending time in nature is important for our physical and mental health.
        Whether it’s a walk in the park, a hike in the mountains, or simply
        sitting under a tree, nature helps reduce stress and improve mood. It
        also reminds us to appreciate the beauty of the environment and take
        steps to protect it...
      </Textexpender>
      <Textexpender
        buttoncolor="gold"
        expanderbutton="show less"
        collapsebutton="show more"
        collapsnumword={10}
      >
        Learning a new language can be challenging, but it’s also very
        rewarding. It allows people to connect with different cultures, improve
        memory, and open up new career opportunities. With consistent practice
        and the right tools, anyone can make progress and enjoy the journey of
        becoming multilingual...
      </Textexpender>
    </div>
  );
}
function Textexpender({
  children,
  expanderbutton,
  collapsnumword,
  buttoncolor,
  collapsebutton,
}) {
  const [isopen, setopen] = useState(true);
  return (
    <div style={{ height: "100%", width: "80%", margin: "50px  auto" }}>
      <div style={{ padding: "20px" }}>
        <span>
          {isopen
            ? children
            : children.split(" ").slice(0, collapsnumword).join(" ")}
        </span>
        <span
          style={{ color: isopen ? "blue" : buttoncolor, cursor: "pointer" }}
          onClick={() => setopen((isopen) => !isopen)}
        >
          {isopen ? "🔓" + expanderbutton : "🔒" + collapsebutton}
        </span>
      </div>
    </div>
  );
}
{
  /* // {()=>( children.split(" ").slice(0, 5).join(" ")) */
}

createRoot(rootElement);

root.render(
  <StrictMode>
    <Challange />
  </StrictMode>
);
