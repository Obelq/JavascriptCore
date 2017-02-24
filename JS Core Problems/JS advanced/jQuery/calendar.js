


function calendar(dateProps) {
    let monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let dayNames = [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun"
    ];
    if (dateProps && dateProps.length === 3) {
        let dateInput = new Date(`${dateProps[1]}.${dateProps[0]}.${dateProps[2]}`),
            totalMonthDays = new Date(dateProps[2], dateProps[1], 0).getDate(),
            dayNumber = dateInput.getDay(),
            daysInWeek = [],
            weeksInMonth = [],
            calendarMarkup = '',
            today = new Date().getDate();

        for (let notADay = 0; notADay < dayNumber; notADay += 1) {
            daysInWeek.push(0);
        }

        for (let currentDay = 1; currentDay <= totalMonthDays; currentDay += 1) {
            daysInWeek.push(currentDay);

            // 7, 14, 21, 28
            if ((dayNumber + currentDay) % 7 == 0) {
                weeksInMonth.push(daysInWeek);
                daysInWeek = [];

                // only on 28
                if (currentDay + 7 > totalMonthDays && currentDay != totalMonthDays) {
                    let leftDays = [];

                    // from 29 to the end of the month
                    for (let leftDay = currentDay + 1; leftDay <= totalMonthDays; leftDay += 1) {
                        leftDays.push(leftDay);
                    }

                    weeksInMonth.push(leftDays);
                }
            }
        }

        let lastWeekInMonth = weeksInMonth[weeksInMonth.length - 1];
        if (lastWeekInMonth.length < 7) {
            while(lastWeekInMonth.length < 7) {
                lastWeekInMonth.push(0);
            }
        }

        let daysHeader = '';
        dayNames.forEach(dayName => {
            daysHeader += `<th>${dayName}</th>`;
        });

        let daysBody = '';
        weeksInMonth.forEach(week => {
            daysBody += '<tr>';
            week.map(dayInWeek => {
                daysBody += `<td ${dayInWeek == today ? 'class="today"':''}>${dayInWeek || ''}</td>`;
            })
            daysBody += '</tr>';
        });

        calendarMarkup +=
            `
            <table>
                <caption>${monthNames[dateInput.getMonth()]} ${dateInput.getFullYear()}</caption>
                <tbody>
                    <tr>
                        ${daysHeader}
                    </tr>
                    ${daysBody}
                </tbody>
            </table>
        `;

        $('#content').append(calendarMarkup);
    }
}