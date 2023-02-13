import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { THEMES } from '../../../Theme/ColorTheme';

const Title = styled.div`
  margin-bottom: 20px;
`
const FontTitle = styled.h2`
  color: ${THEMES.white245};
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.2px;

  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: 25px;
    letter-spacing: -0.2px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.2px;
  }
  @media (min-width: 1600px) {
    font-size: 22px;
    line-height: 30px;
    letter-spacing: -0.4px;
  }
`
const MarginTitle = styled.div`
  margin-bottom: 20px;
`
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`
const BorderSpec = styled.div`
  border-radius: 4px;
  background: ${THEMES.black32};
  padding: 35px 60px;
`
const FlexBasis = styled.div`
  flex-basis: 100%;

  &:not(:first-child){
    margin-top: 40px;
  }
`
const TopPlatform = styled.div`
  position: relative;
  display: flex;

  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    height: 1px;
    background: currentcolor;
    opacity: 0.1;
  }
`
const ButtonPlatform = styled.div`
  font-size: 11px;
  letter-spacing: 0.5px;
  line-height: 1.625;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 125ms ease-in-out 0s;
  white-space: nowrap;
  padding: 20px 0px;
  border-bottom: 3px solid transparent;
  padding: 20px 0px;
  opacity: 0.5;

  &.active{
    opacity: 1;
    border-bottom-color: currentcolor;
  }

  @media (min-width: 768px) {
    padding: 30px 0px;
  }

  &:hover, &:focus {
    border-bottom-color: currentcolor;
    cursor: pointer;
    outline: none;
  }

  &:first-child {
    margin-right: 40px
  }
`
const RequestPlatform = styled.div`
  position: relative;
`
const PaddingInside = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`
const Recommended = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`
const ContentSpecifications = styled.div`
  display: flex;
  flex-direction: row;

  &:not(:first-child){
    margin-top: 20px;
  }
`
const BasisContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 2 - 1/2 * 20px);

  &:nth-child(2) {
    margin-left: 20px;
  }
`
const SpanTitle = styled.span`
  color: ${THEMES.white06};
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 0.2px;
  transition: color 125ms ease-in-out;

  @media (min-width: 1600px) {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0;
  }
`
const SpanContent = styled.span`
  color: ${THEMES.white245};
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 0.2px;
  transition: color 125ms ease-in-out;

  @media (min-width: 1600px) {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0;
  }
`
const UlDevices = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
`
const LiDevices = styled.li`
  &:not(:last-child)::after {
    content: ',';
    margin-right: 0.25rem;
  }
`
const FullWidth = styled.div`
  width: 100%;

  & > div{
    height: 1px;
    max-height: 1px;
    min-height: 1px;
    background-color: ${THEMES.white41}
  }
`
const CenterText = styled.div`
  width: 100%;
  text-align: center;
  &:not(:first-child) {
    margin-top: 10px;
  }
`
const LinkPolicy = styled.div`
  cursor: pointer;
`

const DATA = [
  {
    win: {
      Recommended: {
        version: "Windows 10",
        cpu: 'Pentium 4 2Ghz / AMD Athlon XP 2400',
        memory: '1 GB',
        gpu: 'GeForce FX5700 or better / ATI Radeon 9600 or better',
        storage: '6 GB',
      },
      Minimum: {
        version: "Windows 7",
        cpu: 'Pentium 4 2Ghz / AMD Athlon XP 2400',
        memory: '1 GB',
        gpu: 'GeForce FX5700 or better / ATI Radeon 9600 or better',
        storage: '6 GB',
        device: 'Gamepad'
      },
    },
    mac: {
      Recommended: {
        version: "10.15",
        cpu: 'Any 64-bit processor',
        memory: '1 GB',
        gpu: 'Any',
      },
      Minimum: {
        version: "10.10",
        cpu: 'Any 64-bit processor',
        memory: '1 GB',
        gpu: 'Any',
      },
    },
  }
]

const DATAPLATFORM = [
  {
    id: 1,
    platform: 'Windows'
  },
  {
    id: 2,
    platform: 'Mac OS'
  },
]

const CardContent = ({active}) => {
  return (
    <>
      {DATA.map((items, index) => {
        return (
          <>
            <RequestPlatform key={index}>
              <PaddingInside>
                <Recommended>
                  <BasisContent>
                    <SpanTitle>
                      <span>Minimum</span>
                    </SpanTitle>
                  </BasisContent>
                  <BasisContent>
                    <SpanTitle>
                      <span>Recommended</span>
                    </SpanTitle>
                  </BasisContent>
                </Recommended>
                <ContentSpecifications>
                  <BasisContent>
                    <SpanTitle>
                      OS version
                    </SpanTitle>
                    <SpanContent>
                      {active === 'win' ? `${items.win.Minimum.version}` : `${items.mac.Minimum.version}`}
                    </SpanContent>
                  </BasisContent>
                  <BasisContent>
                    <SpanTitle>
                      OS version
                    </SpanTitle>
                    <SpanContent>
                      {active === 'win' ? `${items.win.Recommended.version}` : `${items.mac.Recommended.version}`}
                    </SpanContent>
                  </BasisContent>
                </ContentSpecifications>
                <ContentSpecifications>
                  <BasisContent>
                    <SpanTitle>
                      CPU
                    </SpanTitle>
                    <SpanContent>
                      {active === 'win' ? `${items.win.Minimum.cpu}` : `${items.mac.Minimum.cpu}`}
                    </SpanContent>
                  </BasisContent>
                  <BasisContent>
                    <SpanTitle>
                      CPU
                    </SpanTitle>
                    <SpanContent>
                      {active === 'win' ? `${items.win.Recommended.cpu}` : `${items.mac.Recommended.cpu}`}
                    </SpanContent>
                  </BasisContent>
                </ContentSpecifications>
                <ContentSpecifications>
                  <BasisContent>
                    <SpanTitle>
                      Memory
                    </SpanTitle>
                    <SpanContent>
                      {active === 'win' ? `${items.win.Minimum.memory}` : `${items.mac.Minimum.memory}`}
                    </SpanContent>
                  </BasisContent>
                  <BasisContent>
                    <SpanTitle>
                      Memory
                    </SpanTitle>
                    <SpanContent>
                      {active === 'win' ? `${items.win.Recommended.memory}` : `${items.mac.Recommended.memory}`}
                    </SpanContent>
                  </BasisContent>
                </ContentSpecifications>
                <ContentSpecifications>
                  <BasisContent>
                    <SpanTitle>
                      GPU
                    </SpanTitle>
                    <SpanContent>
                      {active === 'win' ? `${items.win.Minimum.gpu}` : `${items.mac.Minimum.gpu}`}
                    </SpanContent>
                  </BasisContent>
                  <BasisContent>
                    <SpanTitle>
                      GPU
                    </SpanTitle>
                    <SpanContent>
                      {active === 'win' ? `${items.win.Recommended.gpu}` : `${items.mac.Recommended.gpu}`}
                    </SpanContent>
                  </BasisContent>
                </ContentSpecifications>
                <ContentSpecifications>
                  <BasisContent>
                    <SpanTitle>
                      Storage
                    </SpanTitle>
                    <SpanContent>
                      {active === 'win' ? `${items.win.Minimum.storage}` : `${items?.mac?.Minimum?.storage}`}
                    </SpanContent>
                  </BasisContent>
                  <BasisContent>
                    <SpanTitle>
                      Storage
                    </SpanTitle>
                    <SpanContent>
                      {active === 'win' ? items.win.Recommended.storage : `${items.mac?.Recommended?.storage}`}
                    </SpanContent>
                  </BasisContent>
                </ContentSpecifications>
                <ContentSpecifications>
                  <BasisContent>
                    <SpanTitle>
                      Additional input device
                    </SpanTitle>
                    <SpanContent>
                      {items.win.Minimum.device}
                    </SpanContent>
                  </BasisContent>
                </ContentSpecifications>
              </PaddingInside>
            </RequestPlatform>
          </>
        )
      })
      }
    </>
  )
}

// const Platform = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <>
//       {DATAPLATFORM.map((item, index) => {
//         return (
//           <ButtonPlatform
//             onClick={() => setActiveTab(index)}
//             className={activeTab === index ? 'active' : ''}
//           >
//             <span>{item.platform}</span>
//           </ButtonPlatform>
//         )
//       })}
//     </>
//   )
// }

const Specifications = ({platform}) => {

  const [activeTab, setActiveTab] = useState(0);

  const [activeContent, setActiveContent] = useState('');


  useEffect(() => {
    console.log('Change times.')
    if(activeTab === 0) {
      setActiveContent('win')
    }
    else{
      setActiveContent('mac')
    }
  }, [activeTab]);

  useEffect(() => console.log(activeContent), [activeContent]);

  return (
    <Title>
      <MarginTitle>
        <FontTitle>
          <span>
            Specifications
          </span>
        </FontTitle>
      </MarginTitle>
      <FlexColumn>
        <BorderSpec>
          <FlexColumn>
            <FlexBasis>
              <div>
                <TopPlatform>
                  {/* <ButtonPlatform className="active">
                    <span>Windows</span>
                  </ButtonPlatform>
                  <ButtonPlatform>
                    <span>MacOS</span>
                  </ButtonPlatform> */}
                  {/* <Platform /> */}
                  {DATAPLATFORM.map((item, index) => {
                    return (
                      <ButtonPlatform
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={activeTab === index ? 'active' : ''}
                      >
                        <span>{item.platform}</span>
                      </ButtonPlatform>
                    )
                  })}
                </TopPlatform>
                {/* <RequestPlatform>
                  <PaddingInside>
                    <Recommended>
                      <BasisContent>
                        <SpanTitle>
                          <span>Minimum</span>
                        </SpanTitle>
                      </BasisContent>
                      <BasisContent>
                        <SpanTitle>
                          <span>Recommended</span>
                        </SpanTitle>
                      </BasisContent>
                    </Recommended>
                    <ContentSpecifications>
                      <BasisContent>
                        <SpanTitle>
                          OS version
                        </SpanTitle>
                        <SpanContent>
                          Windows 7
                        </SpanContent>
                      </BasisContent>
                      <BasisContent>
                        <SpanTitle>
                          OS version
                        </SpanTitle>
                        <SpanContent>
                          Windows 10
                        </SpanContent>
                      </BasisContent>
                    </ContentSpecifications>
                    <ContentSpecifications>
                      <BasisContent>
                        <SpanTitle>
                          CPU
                        </SpanTitle>
                        <SpanContent>
                          Pentium 4 2Ghz / AMD Athlon XP 2400
                        </SpanContent>
                      </BasisContent>
                      <BasisContent>
                        <SpanTitle>
                          CPU
                        </SpanTitle>
                        <SpanContent>
                          Pentium 4 2Ghz / AMD Athlon XP 2400
                        </SpanContent>
                      </BasisContent>
                    </ContentSpecifications>
                    <ContentSpecifications>
                      <BasisContent>
                        <SpanTitle>
                          Memory
                        </SpanTitle>
                        <SpanContent>
                          1 GB
                        </SpanContent>
                      </BasisContent>
                      <BasisContent>
                        <SpanTitle>
                          Memory
                        </SpanTitle>
                        <SpanContent>
                          1 GB
                        </SpanContent>
                      </BasisContent>
                    </ContentSpecifications>
                    <ContentSpecifications>
                      <BasisContent>
                        <SpanTitle>
                          GPU
                        </SpanTitle>
                        <SpanContent>
                        GeForce FX5700 or better / ATI Radeon 9600 or better
                        </SpanContent>
                      </BasisContent>
                      <BasisContent>
                        <SpanTitle>
                          GPU
                        </SpanTitle>
                        <SpanContent>
                        GeForce FX5700 or better / ATI Radeon 9600 or better
                        </SpanContent>
                      </BasisContent>
                    </ContentSpecifications>
                    <ContentSpecifications>
                      <BasisContent>
                        <SpanTitle>
                          Storage
                        </SpanTitle>
                        <SpanContent>
                          6 GB
                        </SpanContent>
                      </BasisContent>
                      <BasisContent>
                        <SpanTitle>
                          Storage
                        </SpanTitle>
                        <SpanContent>
                          6 GB
                        </SpanContent>
                      </BasisContent>
                    </ContentSpecifications>
                    <ContentSpecifications>
                      <BasisContent>
                        <SpanTitle>
                        Additional input device
                        </SpanTitle>
                        <SpanContent>
                          Gamepad
                        </SpanContent>
                      </BasisContent>
                    </ContentSpecifications>
                  </PaddingInside>
                </RequestPlatform> */}
                <CardContent active={activeContent} />
              </div>
            </FlexBasis>
            <FlexBasis>
              <FlexColumn>
                <div>
                  <SpanTitle>
                    <span>Languages Supported</span>
                  </SpanTitle>
                </div>
                <UlDevices>
                  <LiDevices>
                    <SpanContent>AUDIO: Arabic, English, French, German, Italian, Japanese, Polish, Portuguese, Portuguese - Brazil, Russian, Spanish - Spain, Spanish - Latin America</SpanContent>
                  </LiDevices>
                  <LiDevices>
                    <SpanContent>TEXT: Chinese - Simplified, Chinese - Traditional, Czech, Danish, Dutch, Finnish, French, German, English, Greek, Hungarian, Italian, Japanese, Korean, Norwegian, Portuguese, Portuguese - Brazil, Russian, Spanish - Spain, Spanish - Latin America, Swedish</SpanContent>
                  </LiDevices>
                </UlDevices>
              </FlexColumn>
            </FlexBasis>
            <FlexBasis>
              <FullWidth><div></div></FullWidth>
            </FlexBasis>
            <FlexBasis>
              <CenterText>
                <SpanTitle>© 2022 MARVEL © 2022 Sony Interactive Entertainment LLC Created and developed by Insomniac Games, Inc. PC version by Nixxes Software BV.</SpanTitle>
              </CenterText>
              <CenterText>
                <LinkPolicy>
                  <SpanContent>
                    <span>Privacy Policy</span>
                  </SpanContent>
                </LinkPolicy>
              </CenterText>
            </FlexBasis>
          </FlexColumn>
        </BorderSpec>
      </FlexColumn>
    </Title>
  )
}

export default Specifications