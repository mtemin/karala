import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { useEffect } from "react";
import { currentUserAtom } from "../_stateStore/atoms";
import { useAtom } from "jotai/react";

type Props = {
    user: User,

}
function Username({ user }: Props) {
    if (!user) return <div className="skeleton mb-1 rounded w-full h-6"></div>
    return (
        <div className="user flex truncate">
            <p className="truncate">
                {user
                    ? user.given_name
                    : "Lorem Ipsum"}
                {/* {user.name} */}

            </p>
            <p className='max-lg:hidden max-sm:inline'>
                &apos;s &nbsp;Notes
            </p>
        </div>
    );
}

export default Username;
