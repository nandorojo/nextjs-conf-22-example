import { Image as Img, View } from '@dripsy/core'
import { StatusBar, useWindowDimensions } from 'react-native'
import { Link } from 'solito/link'
import { useRouter } from 'solito/router'

import * as ContextMenu from 'zeego/context-menu'

export default function TwitterFeed() {
  const { push } = useRouter()
  return (
    <>
      <StatusBar hidden />
      <Feed
        renderTweet={() => (
          <ContextMenu.Root>
            <ContextMenu.Trigger>
              <Tweet />
            </ContextMenu.Trigger>

            <ContextMenu.Content>
              <ContextMenu.Preview onPress={() => push('/menus/tweet')}>
                {() => <TweetPreview />}
              </ContextMenu.Preview>
              <ContextMenu.Item key="delete" destructive>
                <ContextMenu.ItemTitle>Delete Tweet</ContextMenu.ItemTitle>
                <ContextMenu.ItemIcon iosIconName="trash" />
              </ContextMenu.Item>

              <ContextMenu.Item key="unpin">
                <ContextMenu.ItemTitle>
                  Unpin from profile
                </ContextMenu.ItemTitle>
                <ContextMenu.ItemIcon iosIconName="pin" />
              </ContextMenu.Item>

              <ContextMenu.Item key="change">
                <ContextMenu.ItemTitle>
                  Change who can reply
                </ContextMenu.ItemTitle>
                <ContextMenu.ItemIcon iosIconName="bubble.right" />
              </ContextMenu.Item>

              <ContextMenu.Item key="list">
                <ContextMenu.ItemTitle>
                  Add/remove from Lists
                </ContextMenu.ItemTitle>
                <ContextMenu.ItemIcon iosIconName="list.bullet.rectangle" />
              </ContextMenu.Item>
            </ContextMenu.Content>
          </ContextMenu.Root>
        )}
      />
    </>
  )
}

const Feed = ({ renderTweet }: { renderTweet: () => JSX.Element }) => {
  const { width, height } = useWindowDimensions()
  return (
    <>
      <Img
        source={require('./assets/feed.png')}
        sx={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          zIndex: -1,
        }}
        resizeMode="cover"
      />
      <View sx={{ flex: 1, marginTop: height * 0.146 }}>{renderTweet()}</View>
    </>
  )
}

function Tweet() {
  const { width, height } = useWindowDimensions()
  return (
    <Link href="/menus/tweet">
      <Img
        source={require('./assets/list-item.png')}
        style={{ width, height: width * 1.23 }}
        resizeMode="contain"
      />
    </Link>
  )
}

function TweetPreview() {
  const { width } = useWindowDimensions()
  return (
    <Img
      source={require('./assets/preview.png')}
      sx={{
        width: width * 0.9,
        height: (width * 0.9) / 0.69,
      }}
      resizeMode="contain"
    />
  )
}
