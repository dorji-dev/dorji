"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

const giscusConfigs = {
  repo: "dorji-dev/site",
  repoId: "R_kgDOPOvNoA",
  category: "Site Blog",
  categoryId: "DIC_kwDOPOvNoM4CtNfE",
};

const BlogComments = () => {
  const { theme } = useTheme();

  return (
    <div className="mt-14">
      <Giscus
        repo={giscusConfigs.repo as `${string}/${string}`}
        repoId={giscusConfigs.repoId}
        category={giscusConfigs.category}
        categoryId={giscusConfigs.categoryId}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme === "dark" ? "noborder_dark" : "noborder_light"}
      />
    </div>
  );
};

export default BlogComments;
