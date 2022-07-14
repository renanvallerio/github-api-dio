import styled from 'styled-components'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

export const WrapperTabs = styled(Tabs)`
  font-size: 15px;
  width: 100%;
  margin-top: 15px;
`

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 5px;
  display: flex;
  margin: 0;
`
WrapperTabList.tabsRole = 'TabList'

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 2px solid green;
  padding: 15px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: "#fff";
  margin: 10px;

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 3px 2px 10px gray;
  }
`
WrapperTab.tabsRole = 'Tab'

export const WrapperTabPanel = styled(TabPanel)`
  padding: 15px;
  border: 1px solid greenyellow;
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`
WrapperTabPanel.tabsRole = "TabPanel"

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`