export interface NavigationOptions {
    headerStyle: any,
    headerLeft: () => React.ReactNode,
    headerRight: () => React.ReactNode,
    headerTitle: string
}

export interface PressInfo extends ExploreCardInfo {
    y: number,

}

export interface ExploreCardInfo {
    imageUrl: string,
    title: string,
    backgroundColor: string,
    icon: any
}