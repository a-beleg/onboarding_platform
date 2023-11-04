import * as S from "./styledSectionTabs"
import React, {FC, useState} from "react";


export type TabsProps = {
    tabs: { label: string; key: string; tabContent: JSX.Element | JSX.Element[]; }[],
    margin?: string,
    padding?: string,
    filters?:JSX.Element
}

const SectionTabs: FC<TabsProps> = ({tabs, margin, padding, filters}) => {
    const [activeTab, setActiveTab] = useState(tabs[0].key);

    function switchTab(activeTab: string) {
        return tabs.find(tab => tab.key === activeTab)?.tabContent
    }


    return (
        <S.Tabs margin={margin} padding={padding}>
            <S.Nav>
                {tabs.map(tab =>
                    <S.ListItem
                        key={tab.key}
                        isActive={activeTab === tab.key}
                        onClick={() => setActiveTab(tab.key)}>
                        <S.Label>{tab.label}</S.Label>
                    </S.ListItem>
                )}
                {filters}
            </S.Nav>
            {switchTab(activeTab)}
        </S.Tabs>
    );
};

export default SectionTabs;