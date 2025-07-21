"use client";

import Giscus from "@giscus/react";

const giscusConfigs = {
  repo: "dorji-dev/site",
  repoId: "R_kgDOPOvNoA",
  category: "Site Blog",
  categoryId: "DIC_kwDOPOvNoM4CtNfE",
};

const BlogComments = () => {

  return (
    <div className="my-14">
      <Giscus
        repo={giscusConfigs.repo as `${string}/${string}`}
        repoId={giscusConfigs.repoId}
        category={giscusConfigs.category}
        categoryId={giscusConfigs.categoryId}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light_tritanopia"
      />
    </div>
  );
};

export default BlogComments;
