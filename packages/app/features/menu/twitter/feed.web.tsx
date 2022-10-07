import { View, Image as Img, styled } from 'dripsy'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import * as ContextMenu from 'zeego/context-menu'

const Item = ContextMenu.menuify(
  styled(function Item(
    props: React.ComponentProps<typeof ContextMenu['Item']>
  ) {
    return <ContextMenu.Item {...props} />
  })({
    height: 52,
    padding: '$3',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-end',
  }),
  'Item'
)

const Content = ContextMenu.menuify(
  styled((props: React.ComponentProps<typeof ContextMenu['Content']>) => {
    return <ContextMenu.Content {...props} />
  })({
    bg: 'black',
    ...Platform.select({
      web: {
        // twitter dark mode shadow
        boxShadow:
          'rgb(255 255 255 / 20%) 0px 0px 15px, rgb(255 255 255 / 15%) 0px 0px 3px 1px',
        animationDuration: '400ms',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform, opacity',
        animationKeyframes: {
          '0%': { opacity: 0, transform: [{ scale: 0.5 }] },
          '100%': { opacity: 1, transform: [{ scale: 1 }] },
        },
        transformOrigin: 'var(--radix-context-menu-content-transform-origin)',
      },
    }),
    borderRadius: '$3',
  }),
  'Content'
)

const ItemTitle = ContextMenu.menuify(
  styled((props: React.ComponentProps<typeof ContextMenu['ItemTitle']>) => {
    return <ContextMenu.ItemTitle {...props} />
  })(({ destructive }: { destructive?: boolean }) => ({
    color: destructive ? 'rgb(244, 33, 46)' : 'white',
  })),
  'ItemTitle'
)

const ItemIcon = ContextMenu.menuify(
  styled(
    (
      props: React.ComponentProps<typeof ContextMenu['ItemIcon']> &
        Pick<React.ComponentProps<typeof Ionicons>, 'name'> & {
          destructive?: boolean
        }
    ) => {
      return (
        <ContextMenu.ItemIcon {...props}>
          <Ionicons
            name={props.name}
            size={18}
            color={
              props.destructive ? `rgb(244, 33, 46)` : `rgb(113, 118, 123)`
            }
          />
        </ContextMenu.ItemIcon>
      )
    }
  )({
    mr: '$3',
  }),
  'ItemIcon'
)

export default function TwitterFeedWeb() {
  return (
    <View sx={{ flex: 1, bg: 'black', alignItems: 'center' }}>
      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <Tweet />
        </ContextMenu.Trigger>

        <Content>
          <Item key="delete">
            <ItemIcon destructive name="trash-outline" />
            <ItemTitle destructive>Delete Tweet</ItemTitle>
          </Item>

          <Item key="unpin">
            <ItemIcon name="pin-sharp" />
            <ItemTitle>Unpin from profile</ItemTitle>
          </Item>

          <Item key="change">
            <ItemIcon name="chatbubble-outline" />
            <ItemTitle>Change who can reply</ItemTitle>
          </Item>

          <Item key="list">
            <ItemIcon name="list" />
            <ItemTitle>Add/remove from Lists</ItemTitle>
          </Item>
        </Content>
      </ContextMenu.Root>
    </View>
  )
}

function Tweet() {
  return (
    <Img
      source={{
        uri: '/feed-web.png',
      }}
      sx={{
        width: 683,
        height: 693,
      }}
    />
  )
}
