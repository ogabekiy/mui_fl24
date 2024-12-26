import React from 'react'
import GroupSizesColors from './components/Button'
import ColorCheckboxes from './components/Checkbox'
import FloatingActionButtonSize from './components/FloatingButton'
import CustomizedRadios from './components/RadioGroup'
import RatingSize from './components/Rating'
import NativeSelectDemo from './components/Select'
import SliderSizes from './components/Slider'
import InputWithIcon from './components/TextField'
import SelectAllTransferList from './components/TransferList'
import CustomizedDividers from './components/ToggleButton'
import TotalAvatars from './components/Avatar'
import ColorBadge from './components/Badge'
import IntroDivider from './components/Divider'
import SvgIconsColor from './components/Icons'
import SwitchListSecondary from './components/List'
import ColorSwitches from './components/Switch'
import BasicTable from './components/Table'
import SimplePaper from './components/Paper'
import ResponsiveAppBar from './components/Navbar'

export const App = () => {
  return (
    <div>
      <ResponsiveAppBar/>
      <GroupSizesColors/>
      <ColorCheckboxes/>
      <FloatingActionButtonSize/>
      <CustomizedRadios/>
      <RatingSize/>
      <NativeSelectDemo/>
      <SliderSizes/>
      <ColorSwitches/>
      <InputWithIcon/>
      <SelectAllTransferList/>
      <CustomizedDividers/>
      <TotalAvatars/>
      <ColorBadge/>
      <IntroDivider/>
      <SvgIconsColor/>
      <SwitchListSecondary/>
      <BasicTable/>
      <SimplePaper/>

    </div>
  )
}
