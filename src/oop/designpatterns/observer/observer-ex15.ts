/// `>tags:` [[Important]] #Subject
///What makes a Subject interesting is that it has the ability to multicast, which means that it allows multiple subscribers to the same stream and will notify all interested subscribers when an event happens.
/// The purpose of this EventKeys enum and the IBroadcastEvent interface is to define the shape of any event that will be broadcast on our event bus.
import { Observable, Subject, Subscription, filter, map } from "rxjs";
import * as _ from 'underscore';

/// hat makes a Subject interesting is that it has the ability to multicast, which means that it allows multiple subscribers to the same stream and will notify all interested subscribers when an event happens.
enum EventKeys {
  ALL = "all-events",
  SINGLE = "single-event",
}

export interface IBroadcastEvent {
  key: EventKeys;
  data: string;
}

export class BroadcastService {
  private _eventBus = new Subject<IBroadcastEvent>();
  on(key: EventKeys): Observable<string> {
    return this._eventBus.asObservable().pipe(
      filter((event) => event.key === key || event.key === EventKeys.ALL),
      map((event) => event.data)
    );
  }
  broadcast(key: EventKeys, data: string) {
    this._eventBus.next({ key, data });
  }
}

class Listener {
  private eventSubscription: Subscription;
  constructor(
    broadCastService: BroadcastService,
    eventKey: EventKeys,
    private listenerName: string
  ) {
    _.bindAll(this, "reactToEvent");
    this.eventSubscription = broadCastService
      .on(eventKey)
      .subscribe(this.reactToEvent);
  }
  private reactToEvent(event: string) {
    console.log(`Listener [${this.listenerName}]
      received event : ${event}`);
  }
  public unregister() {
    this.eventSubscription.unsubscribe();
  }
}


const broadCastService = new BroadcastService();

const listenOne = new Listener(broadCastService, EventKeys.ALL, "first");
const listenTwo = new Listener(broadCastService, EventKeys.SINGLE, "second");

broadCastService.broadcast(
  EventKeys.ALL, "ALL event broadcast");
broadCastService.broadcast(
  EventKeys.SINGLE, "Single event broadcast");
broadCastService.broadcast(
  EventKeys.ALL, "Another ALL event broadcast");


listenOne.unregister();
broadCastService.broadcast(
    EventKeys.ALL, "final ALL event broadcast");
