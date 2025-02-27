import React, { useState } from 'react'
import AppLogo from '../assets/MyLogo.png';
import Profile from '../assets/profileImage.jpeg';
import '../componentStyling/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons'
function Navbar(props) {
    const activeNav = props?.route?.params?.activeNav || 'Dashboard';
    const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} size='2xl' style={{color: "#4917CB"}} />
    const bellICon = <FontAwesomeIcon icon={faBell} size='xl' style={{color: "#FFD43B",}} />
    const country = [
        {
        "id": 1,
        "name": "India",
        "isoAlpha2": "IN",
        "isoAlpha3": "IND",
        "isoNumeric": 356,
        "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMEUwNDkwQzE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMEUwNDkwRDE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwRTA0OTBBMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAwRTA0OTBCMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+OIHw6AAAAPlJREFUeNpi/D/T+D/DAAAmhgECoxYPf4sZ/wPBQFn8CUjzEqvh7cffDAtX32Xg4WZhYGJkZHj/8SdDTLAKg6QIGyn2fiY5qGdN38/A8OU5g5k2F4OxBicD59+3DHNm7CXZxyykKL548TGDmCgHg6mpMoObWz/Dr19/GHbvLmS4desZWE5fX5Y2Fv/794+BhYWR4e/ff0BLfwPxX4Y/f0BiTAz///+jbRy3te5gEBTgYrCyVgY65D/DuXOPGJ49/cBQW+9FUhyTbPGnt78Z9qx7wiAozMnAyMTI8OblVwYnfxkGIQk2ki0emOwk3MExWjuNWjy8LAYIMADBumJ9k9IhVwAAAABJRU5ErkJggg==",
        },
        {
            "id": 2,
            "name": "British",
            "isoAlpha2": "IO",
            "isoAlpha3": "IOT",
            "isoNumeric": 86,
            "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkQ4RjhDMTYxNzcyMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkQ4RjhDMTUxNzcyMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iMUM0QkU0QUREQkJFMEY0QTBFMUM2MUYzOUU3M0FDOTgiIHN0UmVmOmRvY3VtZW50SUQ9IjFDNEJFNEFEREJCRTBGNEEwRTFDNjFGMzlFNzNBQzk4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+507x4gAABXBJREFUeNrs1OlPk3cAB/Dfw9MLWqAUeggF2nKWq1yFCIgDryGiQ5miTpxTkTDZpmObO5JplmyRxMjUOXRbxBmHyhweGxKCnAWs3AUKT6GU0pY+pS32Pmhpx9+x7M331ff75vPiC6kbfmFsSR4C9Mqn8+PNQoD1bazkHm+7MfBWeW4fDHQmdjjuxzBjCT9I7Rve5x+ZzqF0DS/WPRyWopay7JT33g7jRdG6RIprbQKx2CcnKehUURIrNGRQJINA7uU9RMMfFan+CZG3UGxVO3qd7T77T1377soiCflLIP0un+YJpFQtEH+dtoLRUeDjBj74U/v5adygL64+s2L1ZBYE2winS+P8nfFtwpVeAQIMFgo7GHOiKF6FITXorR8Kp85sST50dbexvcd+zcilktDcSOqyHfA331nwILP9JwLB1faPMXgsDoYUGqvD5XlwjzUpI4mWFbGRmCCPm+yAOr4vxWJcWpPd4/FA3rJi4HQAOzCZ1h1OVxDscbnXrL5kX7sRD7zmkFAfg5EMO0CYn3WdUBF9BBcbM/pKLBlBQYSVlwnTInUB0XMTY9D803zgCgbu1eRUJpdNG5lUQTOXr8llWiuBsCWfR52bAUF4m81j/umu3/5i/3cLQXu/VmcbonMgjZ7LIN4hc59M6SryOGf38fA43M2uthb9nWAfEE9JzWVs3RGfozOYbzyfah2WHSuIw3BHqcxtO65k+VEZNpcv5oKJvjl8vYzUKOAktjIKas/nUtEZXBtyTEJAHdTu6rhLpwsHZ1UFtY9HpGhmpvfwtiqiCtErIo42ClZRwbGdvM/K0mv2Jgtn1VBjU89xph0sKc89Ruq1VIDCTdUR5cL64bQKfoMWMPwqT/JvpUDAZviteerU2NoGHQjAVR/i82Oo99tUHa9XUkkjbgqnZOdODt3TMoC0ds4AjTUkjgpJu/r6H/VainYYqWGxkE1tsmnnVSzRCHvvdieH5dSbBhDUEULeSvcrdqOepASNF7uJiFVqbQqNOTGGLrI47JJ7MbyiQN9oiVieHkfDwD5KvRUPeyB86U0nngTUK/kZoclRlA6hHNHaAJsFpIrtXAqPS++bXJ5bNlndnjU3NjGclBFD6RhcWlYbANk/l6L/BDbw83ye/K0ZAL6dgTzdrJkVTY1gBksX1BCqM9CDAydl6N2O2WFEW5YfVVWcgIEJUrXudqtoUKwtyWHXHsiEgI9MvdrwYmoI0ezJiqzZl4bFYHWil2Nl21e5ZIbUwD3/Oe2DyytG2+3WcaEY3ZPNgQprm/rFmoNbY786nBEfHvKoF/n0Vu+K0Xlgc9TF49mxzBDBtOJcQ69EadybE3WhPDUxPKRjbKnm595ZuftgFnxpl4BCT7Eoxs+1BD+bTSrJDfimPJvLDn7xagE6U9+aEEFt6pt/NSYDZheRQfmoNC2GGfD7S6R7ZBE4XBh/fPU7vCQW9X4n0jO8CKxOmEyqOZDCDQt4/lrtxZP5sJwWF4MPoNjN5g6R8km3BKwYGdE0MDav/EuAaFbfeL3rK0aL02XvnpC1CBCdweT1enRGw0bKVPq214jRavV6vasmy0ZzfE71sGtarjMtmrwt31bPjQsH5fbmrmnNm42VV2s0Gs1mCFdYt2awAAiKT+ckRdE6+5FVpQEQfYHLyU1lprEZ/VMqucoA1l3A443lhiZHBveLllCFGcAwWLOzkjl5tp5eA31pjQGcNgC5IlibmDT/RaUOEsvQOBbl5ejS9ZaR4TndkYL4r49mB5EIfdPL9X8ODc3qdmUxfziZFxLg37Nxby1Do5KVoiz2xffzaIHEzgl53QOhUu8o3xpTW5ZBwOMnZOiV5qE+0fL+vKj/Qf4TIP8KMABGR9CQ7zSDAQAAAABJRU5ErkJggg==",
        },
        {
            "id": 3,
            "name": "China",
            "isoAlpha2": "CN",
            "isoAlpha3": "CHN",
            "isoNumeric": 156,
            "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NDUwRENDQzE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NDUwRENDRDE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU0NTBEQ0NBMTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU0NTBEQ0NCMTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+63sBgQAAAXhJREFUeNrslL1OwzAQx322k+ZDpaFSVSQqOsCChGBl5wkY4AGYeQF2NkYQAxI7ElM3nqE7TAgJtkKaUtQPkto+zgUxwZCgMvUmW5Z+/t0/OcPDesRmU/x7BZKZIZgB0IIh0wmv7KbR3rtOgJnCaGCYQfYkvA3lbarsUdCW6OAhhKhioRIODuZFkyFDxZxlbfqwsJ9yn43b0mlo1eXxWWB6UD8aIsfkIhCRIYl8aApBRLhy1Xe3NLXRvNbxqZ/eC8siqkAQrEAmFi0qOLhxxZKp7wxp+9oqvbVK7pq9xqmb55OQZL1VhcqmlA9ty0OiDC5c1ExWDQRoezdsEvPa4Qgcllz6RQIhF6dhRm3ZPfdxAsF25jZt/5MO1zHnAfWFDAsF8umS3kpBvsDSO8nLqHu8ejAWIXaOQ16xPdHXzo+eihPu638sW0dKhpfsOXFllJtrhX+bRhoc9QJoQNaMTaNgID8VaYrFKdL8edBn+IbM0XP0P6M/BBgAWIia6c9dDfMAAAAASUVORK5CYII=",
            "dial_code": "+86"
        },
        {
            "id": 4,
            "name": "Bangladesh",
            "isoAlpha2": "BD",
            "isoAlpha3": "BGD",
            "isoNumeric": 50,
            "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2Rjk1NzM4RTE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4RkMxQjIzMDE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZGOTU3MzhDMTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZGOTU3MzhEMTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+oE4gsAAAAkNJREFUeNrEVk1r1FAUPS8vmY9M2tJSpG4q6kIYu7LUTXWjG1EQCuJOf4Abf4BuXIi49Q/4A3TRXRfdCK6KCC5Uit1UFxXGQqXTZDL5ep6XpOCAM8lMBnzwXiaZd++59+S+cyPw6O4x/sMwOWfGthKcqjpw8dAgBmeDi+Q1ycEFl5A3fZXtEdME1iBNepQCq50QNw5jnO8liPjoiyOxdcbEjwVG4xM5VKXBzUJQx4BDp68/uLh3EOTOc+9KIWoaeHmhjqeXmxkr/XLg5kh6mWmTjnbed9HuRFBzEl5jcFuLgTz55GG5p/BwzQZiGsbFwMbIf0jvm48u2r8iuKTT+8fuE0sgmDfx4JuPx7s+YMtShTccmBRe+RnizkGIeFZqVocWeGBk7DzbD1A7YbqWqJbx/cMopa0nR782waCCuoE5N8ZNsoP6pMDajvaX3CQ9PqIEdaG2YZAr2kZUoXq8Y1nOYeE+ldX7nm2kWagSEVh6ITtftU2l4iJjbxfN1FkjKRa2Wj+By4re1jaBqgDsJ9g5a+HdkgXzOB7Ke0qOXjyF58s1+LNGJjITA8eZ141VG9/nJVpHcZr5AO387UQKjaMImxfreNGmuvRUxVrQANTk33xnV6/PYOtcDZJ0Osy+xcpNp2aCwbxasbGx1sokNlRT0GoN3k3QsQVurzu4RkG5xXN62iQ+s0lsLpnYW2Rp9fMuVbKsBT8EikM8bYtUs/Qa5UFRUkGqdT1Mvy3+3fi9ZPCAq8kPvQbujq0SFb8+9PgjwAAqQMkwoAhtcwAAAABJRU5ErkJggg==",

        },
        {
            "id": 5,
            "name": "Finland",
            "isoAlpha2": "FI",
            "isoAlpha3": "FIN",
            "isoNumeric": 246,
            "flag": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjUyMkUxNDE3NzkxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjUyMkUxNTE3NzkxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyNTIyRTEyMTc3OTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyNTIyRTEzMTc3OTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FFmzagAAAQ5JREFUeNpi/A8EDAwMnxlwAJO4WQxn915jYJAWhAg8eMPgE2PFsLkvkoESwAKleRnoDJgYBgiMWjx4LGZkZMQiRrnFjIFlK/9jk2BmYmRgYmJi2HXiDsOHV8DcxskKkfj2k0FCVpjB2UyJ4fvPPwyQ3EiGxQwi2dh1ggwEycgIMTBwszMw/PkLEWdlZmD4+J2B4ek7oOuYQSaQabFpw/8RlbhYQEUg/qAGFpVcaEH9CRTUH0AJgeygZnELN2fAlbhAKfrIxUcMn959YWBghyYuoKWikgIMlu66DD9//SU/cf0noNM0fjbDmT1XUSoJ31grhk29kbSNY2zu+v9/OJdcoxZTLx9DwGd6WwwQYAA8jFV5xASNJwAAAABJRU5ErkJggg==",
        },
    ]
    const [search, setsearch] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState(country[0]); // Default: English
    const [showDropdown, setShowDropdown] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
        setShowDropdown(false); // Hide dropdown after selection
      };
    

    const handleClick = () => {
        setShowDropdown(!showDropdown)
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 200); // Reset after 0.8s
    };
    const handleSearch = (e) =>{
        setsearch(e.target.value);
    } 

  return (
    <div className='navbar'>

        <img src={AppLogo} alt='AppLogo' className='navbarLogo' />
        <h1 className='logoName'>Nova</h1>
        <h1 className='activeNavName'>{activeNav}</h1>
        <div className='searchContainer'>
                <div className='searchIcon'>{searchIcon}</div>
                <input 
                    type='text'
                    value={search} 
                    onChange={handleSearch}
                    placeholder='search here...'
                    className='searchInput'
                />
        </div>
        <div className='languageContainer'>
        {/* Flag icon - Click to show dropdown */}
        <div  className={`countyIcon ${isClicked ? "clicked" : ""}`} onClick={() => handleClick()}>
          <img src={`data:image/png;base64,${selectedLanguage.flag}`} alt={selectedLanguage.name} className='flag'/>
        </div>

        {/* Dropdown menu */}
        {showDropdown && (
          <div className={`dropdown ${isClicked ? "clicked" : ""}`}>
            {country.map((lang) => (
              <div key={lang.id}  className='dropdownItem' onClick={() => handleLanguageSelect(lang)}>
                <img src={`data:image/png;base64,${lang.flag}`} alt={lang.name} className='dropdownFlag'/>
                <span>{lang.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className='bellIconContainer'>
        {bellICon}
      </div>

      <div className='profileContainer'>
        <img src={Profile} alt='profile-image' className='profile' />
      </div>
    </div>
  )
}

export default Navbar