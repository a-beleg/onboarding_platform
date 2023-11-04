import * as S from './styled'

type Props = {
  apps: App[]
}

type App = {
  label: string;
  width: string;
  path: string;
  icon: any;
}

const ListApps = ({apps}: Props) => {
  return (
    <S.List>
      {apps.map((app: App, index: number) => (
        <S.ListItem key={index} image={app.icon.src} width={app.width}>
          <S.LinkApp target={'_blank'} href={app.path} aria-label={app.label}>
            <app.icon/>
          </S.LinkApp>
        </S.ListItem>
      ))}
    </S.List>
  );
};

export {ListApps};
