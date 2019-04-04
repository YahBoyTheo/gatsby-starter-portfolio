import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import { UpDown, UpDownWide } from '../styles/animations'
import SVG from '../components/SVG'

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`

const Hero = ({ children, offset }) => (
  <>
    <Divider speed={0.2} offset={offset}>
      <UpDown>
        <SVG icon="gear" hiddenMobile width={48} fill={colors['blue-dark']} left="10%" top="20%" />
        <SVG icon="gear" width={48} fill={colors['blue-dark']} left="60%" top="70%" />
        <SVG icon="gear" width={6} fill={colors['grey-darker']} left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="gear" hiddenMobile width={16} fill={colors['blue-dark']} left="80%" top="10%" />
        <SVG icon="gear" width={12} fill={colors['grey-darkest']} left="90%" top="50%" />
        <SVG icon="gear" width={16} fill={colors['grey-darker']} left="70%" top="90%" />
        <SVG icon="gear" width={16} fill={colors['grey-darkest']} left="30%" top="65%" />
        <SVG icon="gear" width={16} fill={colors['blue-dark']} left="28%" top="15%" />
        <SVG icon="gear" width={6} fill={colors['grey-darkest']} left="75%" top="10%" />
        <SVG icon="gear" hiddenMobile width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="gear" hiddenMobile width={24} fill={colors['grey-darker']} left="5%" top="70%" />
      <SVG icon="gear" width={6} fill={colors['grey-darkest']} left="4%" top="20%" />
      <SVG icon="gear" width={12} fill={colors['grey-darkest']} left="50%" top="60%" />
      <SVG icon="gear" width={8} fill={colors['grey-darkest']} left="95%" top="90%" />
      <SVG icon="gear" hiddenMobile width={24} fill={colors['grey-darker']} left="40%" top="80%" />
      <SVG icon="gear" width={8} fill={colors['grey-darker']} left="25%" top="5%" />
      <SVG icon="gear" width={64} fill={colors['blue-dark']} left="95%" top="5%" />
      <SVG icon="gear" hiddenMobile width={64} fill={colors['blue-dark']} left="5%" top="90%" />
      <SVG icon="gear" width={6} fill={colors['grey-darkest']} left="10%" top="10%" />
      <SVG icon="gear" width={12} fill={colors['grey-darkest']} left="40%" top="30%" />
      <SVG icon="gear" width={16} fill={colors['grey-darker']} left="10%" top="50%" />
      <SVG icon="gear" width={8} fill={colors['grey-darker']} left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
)

export default Hero

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
