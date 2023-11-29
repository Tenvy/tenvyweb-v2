import Skeleton from "react-loading-skeleton"

import SkeletonLoader from "../elements/SkeletonLoader"

const ProfileSkeleton = () => {
  return (
    <SkeletonLoader>
        <Skeleton
            height={100}
            width={100}
            className="rounded-full"
        />
    </SkeletonLoader>
  )
}

export default ProfileSkeleton
