interface UserInfo {
    user: {
        id: string;
        shortId: number;
        uniqueId: string;
        nickname: string;
        avatarLarger: string;
        avatarMedium: string;
        avatarThumb: string;
    };
    stats: {
        followerCount: number;
        followingCount: number;
        heart: number;
        heartCount: number;
        videoCount: number;
    };
}
interface userDataRequest {
    props: {
        pageProps: {
            userInfo: UserInfo;
            items: Array<{
                id: string;
                desc: string;
                video: {
                    id: string;
                    ratio: string;
                    cover: string;
                    originCover: string;
                    playAddr: string;
                };
                author: {
                    id: string;
                    shortId: number;
                    uniqueId: string;
                    nickname: string;
                    avatarLarger: string;
                    avatarMedium: string;
                    avatarThumb: string;
                };
                music: {
                    id: string;
                    title: string;
                    playUrl: string;
                    coverLarge: string;
                };
            }>;
        };
    };
}
