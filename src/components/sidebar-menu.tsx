import { BotMessageSquare, ChevronsDownUp, Mic, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import useRooms from '@/http/use-rooms';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from './ui/sidebar';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

function SideBarMenu() {
  const { data, isLoading } = useRooms();

  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row items-center gap-4 p-4">
        <Link className="rounded-md p-1 hover:bg-accent" to={'/'}>
          <BotMessageSquare className="" size={28} />
        </Link>
        <h1 className="font-semibold text-foreground text-xl antialiased">
          Let Me Ask
        </h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarContent>
            <SidebarMenu className="gap-3">
              <SidebarMenuItem className="flex items-center gap-2">
                <Button
                  className="w-full justify-start hover:cursor-pointer hover:bg-accent"
                  variant="ghost"
                >
                  <Plus />
                  <span>Adicionar sala</span>
                </Button>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link
                  className="flex items-center gap-2 rounded-md py-2 pr-4 pl-3 hover:bg-accent/50"
                  to={'/audio'}
                >
                  <Mic size={16} />
                  <span className=" font-semibold text-sm">Gravar áudio</span>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="my-1.5 flex justify-between px-2 font-normal text-md">
            Salas
            <Button size="icon" variant="ghost">
              <ChevronsDownUp />
            </Button>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {isLoading && <p>Carregando...</p>}
              {data?.map((room) => {
                return (
                  <SidebarMenuItem key={room.id}>
                    <Link
                      className="flex items-center rounded-lg p-2 hover:bg-accent/50"
                      to={`/room/${room.id}`}
                    >
                      <div className="flex w-full justify-between">
                        <h3 className="font-medium ">{room.name}</h3>
                        <Tooltip delayDuration={300}>
                          <TooltipTrigger asChild>
                            <Badge className="text-xs" variant="secondary">
                              {room.questionsCount}
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Perguntas</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </Link>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default SideBarMenu;
