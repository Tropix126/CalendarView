<script>
    import { CalendarView, CalendarViewItem } from "$lib";

    let value;
    $: console.log(value);
</script>

<CalendarView bind:value />

<br />
<br />

<CalendarViewItem>0</CalendarViewItem>
<CalendarViewItem disabled>0</CalendarViewItem>
<CalendarViewItem outOfRange>0</CalendarViewItem>
<CalendarViewItem current>0</CalendarViewItem>
<CalendarViewItem current disabled>0</CalendarViewItem>
<CalendarViewItem selected>0</CalendarViewItem>
<CalendarViewItem selected disabled>0</CalendarViewItem>
<CalendarViewItem current selected>0</CalendarViewItem>
<CalendarViewItem current selected disabled>0</CalendarViewItem>

<br />
<br />

<CalendarViewItem blackout>0</CalendarViewItem>
<CalendarViewItem disabled blackout>0</CalendarViewItem>
<CalendarViewItem outOfRange blackout>0</CalendarViewItem>
<CalendarViewItem current blackout>0</CalendarViewItem>
<CalendarViewItem current disabled blackout>0</CalendarViewItem>
<CalendarViewItem selected blackout>0</CalendarViewItem>
<CalendarViewItem selected disabled blackout>0</CalendarViewItem>
<CalendarViewItem current selected blackout>0</CalendarViewItem>
<CalendarViewItem current selected disabled blackout>0</CalendarViewItem>